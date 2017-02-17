# NgxDevUtils

## Install

These are development utilities, and you will probably not want to include them in the production application.
```bash
npm install ngx-dev-utils --save-dev
```

## Setup

Import the ```NgxDevUtilsModule``` into your AppModule

  ```Javascript
  import { NgxDevUtilsModule } from "ngx-dev-utils";

  ...


  @NgModule({
    declarations: [],    
    imports: [    
      NgxDevUtilsModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }
  ```

## About

This is a small library that will provide some helpful modules with components/pipes/directives that could be useful for developing Angular applications.

## Components

### PrettyObjectComponent

This is a component that will render out any object with its properties in a format that is easier to read than the ```json``` pipe.

Given an object like:

```Javascript
{
    name:"Barry",
    hobbies: ["code", "boardgames", "soccer", "hiking"],
    profession: {
      title:"Software Developer",
      company:"Roaring Cat Games",
      industry: "Game Development",
      project: {
        name:"GalaxSeed",
        genres:["Mobile", "Arcade", "Shooter"]
      }
    }
  };

```

the rendering would look like:

![alt text](https://github.com/barryrowe/ngx-dev-utils/raw/master/docs/example-render.png "Example PrettyObjectComponent Render")

#### Usage

Selector: 'ndu-pretty-object'

Inputs:  [obj]: any 

```Javascript
@Component({
  template:`
    <h1>My Template</h1>
    <ndu-pretty-object [obj]="myObject"></ndu-pretty-object>
  `
})
export class ExampleComponent(){
  public myObject:any = {
    name:"Your Name",
    data: {
      type:"Sub Object",
      number: 1,
      details: ["a", "b", "c"]
    }
  }
}
```