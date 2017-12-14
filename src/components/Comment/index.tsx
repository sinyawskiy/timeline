import * as React from 'react';

import * as ItemCss from '../../assets/item.css';

import { ActivityItem } from 'office-ui-fabric-react/lib/ActivityItem';
import personaFemale from '../../assets/persona.png';

interface CommentProps {
	highlight?: boolean;
}

export class Comment extends React.Component<CommentProps> {
	public render() {
		const activityItemExamples = {
			activityDescription: [
				<a key={1} className='ms-activityItem-nameText' onClick={() => { alert('A name was clicked.'); }} >Jack Howden</a>,
				<span key={2}> renamed </span>,
				<a key={3} className='ms-activityItem-nameText' onClick={() => { alert('A document clicked') }}>DocumentTitle.docx</a>
			],
			activityPersonas: [
				{
					imageUrl: personaFemale
				}
			],
			comments: 'Hello, this is the text of my basic comment!',
			timeStamp: '23m ago'
		};

		return <div className={ItemCss.item} data-highlight={this.props.highlight ? 'true' : null}>
			<ActivityItem {...activityItemExamples}/>
		</div>
	}
}