import * as React from 'react';

import { FileIsUploaded } from '../FileIsUploaded';
import { Comment } from '../Comment';
import { ShowNew } from '../ShowNew';

import faker from 'faker';

import {
	Spinner,
	SpinnerSize
  } from 'office-ui-fabric-react/lib/Spinner';

export class Timeline extends React.Component<{}> {
	public render() {
		const fakeFile = {
			user: {
				avatar: faker.image.avatar(),
				userName: faker.internet.userName(),
			},
			filename: faker.internet.domainName() + '.xml',
			timestamp: faker.date.past(),
		};

		const fakeComment = {
			user: {
				avatar: faker.image.avatar(),
				userName: faker.internet.userName(),
			},
			file: {
				fileName: faker.internet.domainName() + '.txt',
			},
			timestamp: faker.date.past(),
			text: faker.lorem.paragraph(),
		}
		return <div>
			<h2>Timeline</h2>
			<div>
				<ShowNew />
				<FileIsUploaded {...fakeFile}/>
				<FileIsUploaded highlight {...fakeFile} />
				<Comment {...fakeComment}/>
				<Comment highlight {...fakeComment}/>
				<Spinner size={ SpinnerSize.large } label='Loading older events...' ariaLive='assertive' />
			</div>
		</div>
	}
}