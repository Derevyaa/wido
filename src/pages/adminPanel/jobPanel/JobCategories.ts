'use strict';
import BasePage from 'src/pages/BasePage';
import * as Collections from 'typescript-collections';

const Params = require('./Params.page.js');

class JobCategories {

get addCategoryBtn() {
    return $('#btnAdd');
}

get addCategoryNameInput() {
    return $("//input[@name='jobCategory[name]']");
}

get table() {
    return $('#resultTable');
}

testStream() {
    const myList = new Collections.LinkedList<string>();
    myList.add('test1');
    myList.add('test2');
    myList.add('test3');
    myList.add('test4');

    myList.forEach(function(myList) {
       // console.log(myList);

    });

}

printValue(value: string) {
    console.log('value : '+ value);
}

addNewCategory(name: string) {
    this.addCategoryBtn.click();
    this.addCategoryNameInput.addValue(name);
}
}

export default new JobCategories();