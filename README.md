Formation – Angular- 2020

# **Lab n°1**

## **Learning Goals**

The purpose of this lab is to get the prerequisites for Angular development installed on your machine and to prepare your first app for development using the Angular Command Line Interface or CLI.

## **Requirements**

- [Fork this repo](https://guides.github.com/activities/forking/) : https://github.com/pr-elhajji/formation-angular
- Clone your fork into your ~/code/labs folder.
- Choose the branch &quot; **lab1-first-app**&quot;

## **Submission**

Upon completion, run the following commands:

$ git add

$ git commit -m 

$ git push origin Lab

## **Deliverables**

All the files, with the necessary code to satisfy the requirements described below.

## **Tutorial Labs**

1. _Install Visual Studio Code_

In this lab, you will learn how to install Visual Studio Code on your machine.

2. _Install Prerequisites_

In this lab, you will install Node, NPM, TypeScript, and the Angular CLI.

3. _Using the Angular CLI_

In this lab, you will learn the basics of using the Angular CLI to generate components within your app, and to run your app locally.

# Angular in Visual Studio Code : [https://code.visualstudio.com/docs/nodejs/angular-tutorial](https://code.visualstudio.com/docs/nodejs/angular-tutorial)

## To Install Node.js and NPM

Node.js - commonly referred to as Node - is a JavaScript runtime that allows you to run JavaScript on your computer without using a browser. This is the technology that enables JavaScript based application servers, including the one used by Angular.

Node also includes a package manager for installing 3rd party modules within their environment called Node Package Manager, or NPM.

In order to use the Angular CLI, we need to first install Node.js and NPM on your computer. Follow the instructions below based on which operating system you are currently using.

**Mac OS X**

1. If you do not have XCode installed, install it from the [Apple App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).
2. If you do not already have Homebrew installed, you will need to install it. Homebrew is a package manager specifically for OS X - you can find more about it [on the Homebrew Website](http://brew.sh/). To install it you run the following command in your terminal.

ruby -e &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;

1. With Homebrew installed, installing Node and NPM is easy. Just run the following:

brew install node

1. Follow the messages in the terminal to install Node.

**Linux**

To install Node on your Linux Machine, follow the instructions for your specific Linux distribution at [Node&#39;s Linux Installation Instructions Page](https://nodejs.org/en/download/package-manager/)

**Windows**

1. Download the Node.js installer [here](https://nodejs.org/en/#download). You must have administrative rights on your machine to install Node.
2. Run the installer.
3. Follow the prompts in the installer. Make sure that the option &quot;Add to PATH&quot; is selected. This allows you to run Node as a command in your command prompt.
4. Restart your computer.

**To Install TypeScript**

TypeScript is a superset of the JavaScript language that allows for stricter typing, along with a series of other features. Angular uses TypeScript instead of JavaScript. Now that we have Node and NPM installed, we can install TypeScript, the last prerequisite needed before installing the Angular CLI.

1. Installing TypeScript requires administrative privileges. For Windows, this means you need to open a command prompt or terminal with administrative rights. For Mac and Linux users, just open a terminal.
2. To install TypeScript, simply open your command prompt or terminal window and type:

npm install typescript -g

For Mac and Linux users you need sudo rights to install TypeScript, so type:

sudo npm install typescript -g

The -g flag tells NPM to install TypeScript as a global module, instead of to the directory your terminal is currently pointed it. This will enable you to be able to use the tsc command to compile TypeScript directly, and enable the Angular CLI to be able to use it.

Now that we have installed TypeScript, next we will install the Angular CLI.

## **To Install the Angular CLI**

The Angular Command Line Interface is an optional component for Angular development that offers a series of generators and commands to make developing in Angular simpler and faster.

As you learned in Lesson 3, with the Angular CLI, you can create a scaffold for your app, generate components, modules, and also perform build tasks such as linting your code, serving your app locally, preparing your files for production usage, and using Angular&#39;s Ahead of Time compilation to optimize the performance of your app in production environments.

Let&#39;s go ahead and use NPM to install the Angular CLI on your machine.

1. Type the following into your command line or terminal window:

npm install @angular/cli -g

For Mac and Linux users you need sudo rights to install the Angular CLI, so type:

sudo npm install @angular/cli -g

1. Press Enter, and observe the installation occurring (it will take some time).

And that&#39;s it! Now we have everything installed to start creating our Angular app. In the next lab we will be using the Angular CLI to generate the scaffolding for our application.

## **To Generate an Application Scaffold using the Angular CLI**

Now that we have the Angular CLI installed, we are going to use it to create a scaffold for our application. The term &quot;Scaffold&quot; refers to the process of generating a generic template of an application based on the standards of how an Angular application should be constructed. A basic folder hierarchy is created following layout and naming best-practices. The folders are then populated with the components necessary to create a basic Angular application. Creating a scaffold sets up the basic files and architecture required for your app to run, and gives you a good pattern to follow. Using the Angular CLI to build your scaffold also gives you a variety of useful tools, including:

- Linting
- Unit testing with Karma
- End to End testing with Protractor
- Ahead of Time Compilation
- A built in local server

Let&#39;s go ahead and instantiate a scaffold with the Angular CLI.

1. First we need a name for our application. It needs to be alphanumeric (excepting that it can use dash characters), but the dashes must be immediately succeeded by a letter. For this application we are going to call it angular-fundamentals.
2. Open your command prompt and navigate to the directory you want to generate your app in. Note that the CLI will generate a subdirectory with the name angular-fundamentals within that directory.
3. Type the following to instantiate your application.

ng new angular-fundamentals

1. Press enter and observe the application building. You should see something like this:  ![](RackMultipart20200624-4-dghsqy_html_79190a52d23e9142.png)

That&#39;s it! You now have your application scaffolded. Next, we&#39;re going to add an extra component.

Now that we have our app generated using the Angular CLI, we&#39;re going to use the Angular CLI&#39;s generator feature to generate a module. Using the built in generator command in the Angular CLI allows you to create components of your application easily without having to worry about properly including the code in your application. The Angular CLI generates the files in the appropriate format and modifies your files to include the newly generated component properly. Some of the different generators that the Angular CLI can run are:

- Modules ng g module my-module
- Components ng g component my-component
- Directives ng g directive my-directive
- Pipes ng g pipe my-pipe
- Services ng g service my-service
- Classes ng g class my-class
- Guards ng g guard my-guard
- Interfaces ng g interface my-interface
- Enums ng g enum my-enum

We will expand on many of these later in the course. For now, let&#39;s generate a module using the Angular CLI Generator function.

1. Open your command prompt or terminal and navigate to your angular-fundamentals directory that you created in the last section.
2. Run the following command:

ng g module first-module

Note that first-module is the name of the module you are creating.

1. You will see the following:

![](RackMultipart20200624-4-dghsqy_html_57b942661595f1c6.png)

1. If you open up the first-module.module.ts file you will see the following:

![](RackMultipart20200624-4-dghsqy_html_701ab0d143e9813b.png)

NOTE: You will find this file inside the first-module directory under the app directory in the src directory. src\app\first-module

That&#39;s it! You&#39;ve generated a module. Next, we&#39;re going to learn how to serve your app using the Angular CLI.

## Use the Angular CLI to Run your App Locally

One of the most useful features about using the Angular CLI is the ability to serve your app locally in order to test it in real time. Serving your app compiles your modules for use and runs a server on your computer. You can then access the app via a browser. In addition, the Angular CLI will listen to changes to your files and recompile your app, meaning you can edit code, and then immediately see the changes in your browser.

Let&#39;s serve the app we made now.

1. Open your command prompt and navigate to the angular-fundamentals app we generated earlier.
2. Type the following:

ng serve

1. You should see the following:

![](RackMultipart20200624-4-dghsqy_html_a4d2b37b0e84584c.png)

1. Open up a browser and navigate to http://localhost:4200. You should see this:

![](RackMultipart20200624-4-dghsqy_html_59d3e3b4a38a6672.png)

1. Now, let&#39;s make a small change. Open up the file angular-fundamentals/src/app/app.component.ts in Visual Studio Code. Line 9 looks like this:

title =&#39;app&#39;;

Let&#39;s change that to something else.

title =&#39;GitHub Browser&#39;;

1. Save the file, then go back to your console. You will something similar to the following after the original output:

![](RackMultipart20200624-4-dghsqy_html_834cb1cd135930e.png)

1. And when you go back to your browser you will see the change, like this:

![](RackMultipart20200624-4-dghsqy_html_eff955622bcf17da.png)

You have now generated your first app using the Angular CLI and served it to your browser. In our next module, you will begin to build your app within the scaffold that you have created.

![](RackMultipart20200624-4-dghsqy_html_cbc55e765590d86.gif)

5
