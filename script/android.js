const fs = require("fs");
const path = require("path");

const dirPath = "./docs/04-Android";

const renameIndexFiles = (dir) => {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((item) => {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // If it's a directory, dive in recursively
      renameIndexFiles(fullPath);
    } else if (item.isFile() && item.name === "index.md") {
      // If it's an "index.md" file, rename it
      const targetPath = path.join(dir, `${path.basename(dir)}.md`);
      fs.renameSync(fullPath, targetPath);
    }
  });
};

renameIndexFiles(dirPath);
