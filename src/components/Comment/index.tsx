import * as React from 'react';
import faker from 'faker';

import * as ItemCss from '../../assets/item.css';
import * as CommentCss from './index.css';

interface CommentProps {
	highlight?: boolean;

	user: {
		avatar: string,
		userName: string,
	};

	file: {
		fileName: string,
	};

	timestamp: Date;
	text: string;
}

export class Comment extends React.Component<CommentProps> {
	public render() {
		const { user, file, text } = this.props;

		const { avatar, userName } = user;
		const { fileName } = file;

		const timeStamp = '5 minutes ago';

		return (<div className={`${ItemCss.item} ${CommentCss.root}`} data-highlight={this.props.highlight ? 'true' : null }>
			<img src={avatar} className={CommentCss.avatar} />
			<div>
				<a href="#">{userName}</a> commented <a href="#">{fileName}</a> {timeStamp}
			</div>
			<div className={CommentCss.text}>
				{text}
			</div>
		</div>);
	}
}