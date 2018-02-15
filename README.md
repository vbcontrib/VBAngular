# VBAngular
Experiment: Let's try to create an Angular frontend with an ASP.NET Core/EF Core Backend...in Visual Basic!

## Prerequisites before getting the project from GitHub
* Check, if you have installed (or installed the latest version) of npm:

```
C:\Users\klauslo>npm --version
5.6.0
```
* If not, install the LTS version from https://nodejs.org/en/download/
* After that, install the Angular-CLI with

```
npm install -g @angular/cli
```

## Prerequisites after getting the project from GitHub
* Change into the project directory, and further to the project subfolder `RoamingClipboardApi`.
* Enter the following line to restore the npm modules into the node_modules folder.
```
D:\GitHubDev\VbAngular\src\RoamingClipBoardApi>npm install
```

* Use `ng build` to let WebPack build the TypeScript libs (and also later the project's TypeScript code) into a package bundle.
```
D:\GitHubDev\VbAngular\src\RoamingClipBoardApi>ng build
Date: 2018-02-12T15:16:38.258Z
Hash: 366b298126bdda8bb2dc
Time: 4630ms
chunk {inline} inline.bundle.js, inline.bundle.js.map (inline) 5.83 kB [entry] [rendered]
chunk {main} main.bundle.js, main.bundle.js.map (main) 7.26 kB [initial] [rendered]
chunk {polyfills} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 201 kB [initial] [rendered]
chunk {styles} styles.bundle.js, styles.bundle.js.map (styles) 11.4 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js, vendor.bundle.js.map (vendor) 2.43 MB [initial] [rendered]
```

* Use `ng build --watch` to set up an continuing process which does that: Whenever a file from the frontend (Angular) project changes, the build process automatically restarts. This way, you can develop the frontend and test it out without any noticeable delay.

* Set RoamingWebApi as the startproject, run and test it in the browser.
(Development is in progress, it is not ready yet, though, but you can see that it works in principle)
