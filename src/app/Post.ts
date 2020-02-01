import {Content} from './Content/Content';
import {Paragraph} from './Content/Paragraph';
import {Image} from './Content/Image';
import {YouTubeVideo} from './Content/YouTubeVideo';

export class Post {
  title: string;
  date: string;
  content: Content [];

  constructor(t: string) {
    this.title = t;

    this.content = [new Paragraph('It wasn’t so long ago that the RTX 2080 Ti was the top consumer-grade GPU for Deep Learning (DL) on the market. However, this changed when the Titan RTX came out recently with better performance, a lot more VRAM (24 GB) and a hefty price tag of $2500.'),
      new Paragraph('In this article, we’ll be taking a look at the new Turing GPU architecture, specifically Titan RTX, and how good it is for deep learning (DL) workloads.'),
      new Paragraph( 'A lot of the improvements in Turing cards come from playing around with the numerical precision of deep learning models. Let’s delve into it and see how it works or when it doesnt'),
      //new Paragraph( 'The precision refers to how each number is represented in memory. With full precision, each number takes up 32 bits in memory. Thus, it’s also known as FP32. For floating point numbers, this means using 8 bits for the exponent and 23 bits for the fraction with 1 bit left over for the sign.'),
      new Image('./assets/joshForestFires.jpg'),
    ];
  }

}
