/**
 * Created by E214595 on 23.02.2017.
 */
import {Component, View} from "angular2/core";

@Component({
    selector: 'my-app'
})

@View({
    template: '<h2>Hello World !!</h2><div>Your name is : {{name}}</div>'
})

export class MyHelloWorldClass {
    name = "World";
}
