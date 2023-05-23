import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() name='';
  @Input() genre='';
  @Input() title = '';
  @Input() rating =''; 
  @Input() imageUrl = '';
  @Input() currentPrice = 0;
  @Input() priceChange = 0;
}
