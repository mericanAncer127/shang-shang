import path from 'path';
import { Fragment } from 'react';
import { readMDXFile } from '../blog/utils';
import { CustomMDX } from '../components/mdx';
import GithubContributions from './github-contributions/github-contributions';
import Occupation from './occupation';
import CareerTimeline from '../components/career-timeline';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About',
  description: 'About Remy Wong',
};

export default function Page() {
  return (
    <Fragment>
      <Occupation />
      <CustomMDX source={content} />
      <CareerTimeline />
      <GithubContributions />
    </Fragment>
  );
}
