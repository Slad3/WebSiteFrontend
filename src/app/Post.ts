import {Content} from './Content/Content';
import {Paragraph} from './Content/Paragraph';
import {Image} from './Content/Image';
import {YouTubeVideo} from './Content/YouTubeVideo';

export class Post {
  title: string;
  altTitle: string;
  date: string;
  content: Content [];

//   constructor(t: string) {
//     this.title = t;

//     this.content = [new Paragraph('It wasn’t so long ago that the RTX 2080 Ti was the top consumer-grade GPU for Deep Learning (DL) on the market. However, this changed when the Titan RTX came out recently with better performance, a lot more VRAM (24 GB) and a hefty price tag of $2500.'),
//       new Paragraph('In this article, we’ll be taking a look at the new Turing GPU architecture, specifically Titan RTX, and how good it is for deep learning (DL) workloads.'),
//       new Paragraph( 'A lot of the improvements in Turing cards come from playing around with the numerical precision of deep learning models. Let’s delve into it and see how it works or when it doesnt'),
// 	  new Image('./assets/joshForestFires.jpg'),
// 	  new YouTubeVideo('https://www.youtube.com/watch?v=hgdSJdeGF_0'),
//     ];
//   }

  constructor(input: Post){
	this.title = input.title;
	this.altTitle = input.altTitle;
	this.date = input.date;
	this.content = input.content;

  }

}
