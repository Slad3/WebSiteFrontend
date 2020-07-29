import {Content} from './Content/Content';
import {Paragraph} from './Content/Paragraph';
import {Image} from './Content/Image';
import {YouTubeVideo} from './Content/YouTubeVideo';
import {SubTitle} from './Content/subTitle';
import { DateStruct } from './Content/DateStruct';

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
