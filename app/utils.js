import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sendGTMEvent } from '@next/third-parties/google'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export const tagManager = (eventName, payload = {}) => {
  if (typeof dataLayer != "undefined") {
    sendGTMEvent({ event: eventName, ...payload });
    console.log("Event successfully triggered: " + eventName);
  } else
    console.log("TagManager:dataLayer not found to trigger event " + eventName);
}