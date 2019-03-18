import { Component } from '@angular/core';
import { recul, ReculOn } from 'recul';

@ReculOn('hello')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-recul-angular';
  count = '0';

  constructor() {
    recul.on('a', a => {
      console.log('on a 1', a);
      this.count = a;
    });

    // this.$count.then(count => console.log('count', count));

    console.log(this.count);
  }

  ngOnInit() {
    recul.on('a', a => console.log('on a 2', a));
  }

  upCount() {
    let a = recul.getValue('a') || 0;
    recul.setValue('a', recul.getValue('a', 'a') + 1);
  }
}
