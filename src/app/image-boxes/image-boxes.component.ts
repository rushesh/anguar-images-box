import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-boxes',
  templateUrl: './image-boxes.component.html',
  styleUrls: ['./image-boxes.component.css'],
})
export class ImageBoxesComponent implements OnInit {
  imageNames = [
    {
      url: '../assets/images/foodimg1.jpg',
      name: 'foodimg1.jpg',
      show: false,
    },
    {
      url: '../assets/images/foodimg2.jpg',
      name: 'foodimg2.jpg',
      show: false,
    },
    {
      url: '../assets/images/foodimg3.jpg',
      name: 'foodimg3.jpg',
      show: false,
    },
    {
      url: '../assets/images/foodimg4.jpg',
      name: 'foodimg4.jpg',
      show: false,
    },
    {
      url: '../assets/images/foodimg5.jpg',
      name: 'foodimg5.jpg',
      show: false,
    },
    {
      url: '../assets/images/foodimg6.jpg',
      name: 'foodimg6.jpg',
      show: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  isClicked(
    boxno: number,
    image: { url: string; name: string; show: boolean }
  ) {
    if (!this.checkIftrue(boxno)) {
      let posIndex = this.checkFirstShowTrue();
      if (posIndex == -1 && this.checkIftrue(0) == false) {
        this.imageNames[0].show = true;
      } else if (posIndex - 1 == boxno) {
        this.imageNames[0].show = true;
      } else if (posIndex >= 0) {
        this.imageNames[posIndex + 1].show = true;
      }
    }
  }
  deleteImg(
    boxno: number,
    image: { url: string; name: string; show: boolean }
  ) {
    if(this.checkIftrue(boxno)==true){
      this.shiftShowArrayValues(boxno);
    }
  }
  checkFirstShowTrue() {
    let count = -1;
    for (let i = 0; i < this.imageNames.length; i++) {
      if (this.imageNames[i].show == true) {
        count = i;
      }
    }
    return count;
  }
  checkIftrue(i: number) {
    return this.imageNames[i].show;
  }
  shiftShowArrayValues(num: number) {
    let pos = this.checkFirstShowTrue();
    if(pos==num){
      this.imageNames[pos].show = false;
    }
    else{
      this.imageNames[num].show = false;
      let toBeDeleted = this.imageNames[num];
      for (let i = num; i < this.imageNames.length-1; i++) {
        this.imageNames[i] = this.imageNames[i+1];
      }
      this.imageNames[this.imageNames.length-1] = toBeDeleted;
    }
  }
}