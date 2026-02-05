import fs from "fs";
import path from "path";
import sharp from "sharp";
import ffmpeg from "fluent-ffmpeg";
import ffprobe from "ffprobe-static";
import existingProjects from "./src/data/projects.js";

ffmpeg.setFfprobePath(ffprobe.path);

const ROOT_DIR = "./public/images/projects";

const IMAGE_EXT = ["png", "jpg", "jpeg", "webp", "gif"];
const VIDEO_EXT = ["mp4", "mov", "webm", "mkv"];

const isImage = ext => IMAGE_EXT.includes(ext);
const isVideo = ext => VIDEO_EXT.includes(ext);

async function getImageMeta(filePath) {
  const meta = await sharp(filePath).metadata();
  return { width: meta.width, height: meta.height };
}

function getVideoMeta(filePath) {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) return reject(err);
      const stream = metadata.streams.find(s => s.width && s.height);
      resolve({
        width: stream?.width ?? null,
        height: stream?.height ?? null
      });
    });
  });
}

async function generateSlides(projectPath) {
  const slides = [];
  const files = fs.readdirSync(projectPath);

  for (const file of files) {
    const fullPath = path.join(projectPath, file);
    const ext = path.extname(file).slice(1).toLowerCase();
    const name = path.parse(file).name;

    if (!isImage(ext) && !isVideo(ext)) continue;

    let dimensions = { width: null, height: null };

    if (isImage(ext)) dimensions = await getImageMeta(fullPath);
    if (isVideo(ext)) dimensions = await getVideoMeta(fullPath);

    slides.push({
      type: ext,
      name,
      path: fullPath.replace(ROOT_DIR, "").replace('public/', ''),
      width: dimensions.width,
      height: dimensions.height
    });
  }

  // Sort: 01, 02, 03, intro
  slides.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  return slides;
}

async function mergeProjects() {
  const merged = [...existingProjects];

  const folders = fs.readdirSync(ROOT_DIR, { withFileTypes: true });

  for (const folder of folders) {
    if (!folder.isDirectory()) continue;

    const projectPath = path.join(ROOT_DIR, folder.name);
    const slides = await generateSlides(projectPath);

    const project = merged.find(p => p.title === folder.name);

    if (project) {
      project.slides = slides; // 🔥 merge point
    } else {
      merged.push({
        title: folder.name,
        tags: [],
        description: "",
        slides
      });
    }
  }

  fs.writeFileSync(
    "./src/data/projects.js",
    `const projects = ${JSON.stringify(merged, null, 2)};\nexport default projects;`
  );

  console.log("✅ projects.js updated");
}

mergeProjects();