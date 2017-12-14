import * as React from 'react';

import { FileIsUploaded } from '../FileIsUploaded';
import { Comment } from '../Comment';
import { ShowNew } from '../ShowNew';


import {
	Spinner,
	SpinnerSize
  } from 'office-ui-fabric-react/lib/Spinner';

export class Timeline extends React.Component<{}> {
	public render() {
		return <div>
			<h2>Timeline</h2>
			<div>
				<ShowNew />
				<FileIsUploaded />
				<FileIsUploaded highlight />
				<Comment />
				<Comment highlight/>
				<Spinner size={ SpinnerSize.large } label='Loading older events...' ariaLive='assertive' />
			</div>
		</div>
	}
}