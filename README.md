# NgxDevUtils

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
