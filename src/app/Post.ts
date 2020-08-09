import {Content} from './api/Content/Content';
import {Paragraph} from './api/Content/Paragraph';
import {Image} from './api/Content/Image';
import {YouTubeVideo} from './api/Content/YouTubeVideo';
import {SubTitle} from './api/Content/SubTitle';
import { DateStruct } from './api/Content/DateStruct';

export class Post {
  title: string;
  altTitle: string;
  date: DateStruct;
  content: Content [] = [];
  tags: string [] = []

  constructor(input: Post){
	this.title = input.title;
	this.altTitle = input.altTitle;
	this.date = new DateStruct(input.date);
	input.tags.forEach( tag => this.tags.push(tag));

	input.content.forEach(cont => {
		console.log(typeof cont);
	

		if(cont.paragraph){
			this.content.push(new Paragraph(cont.paragraph))
		}
		else if(cont.image){
			this.content.push(new Image(cont.image))
		}
		else if(cont.subTitle){
			this.content.push(new SubTitle(cont.subTitle))
		}
		// else if(cont.youtube){
		// 	this.content.push(new YouTubeVideo(cont.youtube))
		// }
		// else{
		// 	console.log(cont.toString())
		// 	this.content.push(cont)
		// }
	});

  }

}
