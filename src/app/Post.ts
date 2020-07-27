import {Content} from './Content/Content';
import {Paragraph} from './Content/Paragraph';
import {Image} from './Content/Image';
import {YouTubeVideo} from './Content/YouTubeVideo';
import {SubTitle} from './Content/subTitle';

export class Post {
  title: string;
  altTitle: string;
  date: string;
  content: Content [] = [];

  constructor(input: Post){
	console.log(input.title)
	this.title = input.title;
	this.altTitle = input.altTitle;
	this.date = input.date;
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
		else if(cont.youtube){
			this.content.push(new YouTubeVideo(cont.youtube))
		}
		else{
			this.content.push(cont.toString())
		}
		// console.log(cont);
		// this.content.push(new Content(cont))
	});

  }

}
