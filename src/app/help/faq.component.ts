import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-help',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

    faqsFiltered = [
        {
            'question': 'What is Women Empowerment?',
            'answer': 'Women empowerment is to motivate and develop women by promoting their participation in all areas and sectors, to build stronger economies, improve their quality of life and bring gender equality with an equal amount of opportunities.'
        },
        {
            'question': ' How does it help women?',
            'answer': 'It helps them to make their own decisions by breaking all their personal rules that the society and their family has created for them. It is to make them independent in all aspects from thought, mind, decision, wealth and to bring equality in society.'
        },
        {
            'question': "What is the importance of women's empowerment in India?",
            'answer': 'India is full of diversity where in eastern part society is female dominated. While in north its male dominated.Women are coming forward in every field few are defense, technology, politics, entrepreneurships etc. Gender ration in Haryana, punjab increaed this year. Reporting of crime against women increased.'
        },
        {
            'question': "What is the most stressful part about working at WOMEN'S EMPOWERMENT?",
            'answer': 'Constant crisis intervention with no staff support.'
        }
        ];

    constructor() {
        this.openMenu();
    }


    openMenu(){
        $('body').removeClass('noScroll');
        if ($('.collapse').hasClass('collapse-active')) {
            $('.collapse').removeClass('collapse-active');
        }
        else {
            $('.collapse').addClass('collapse-active');
        }
    }

}
