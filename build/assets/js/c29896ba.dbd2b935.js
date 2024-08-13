"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[123],{5211:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=i(5893),a=i(1151);const t={},s="How to Encrypt and Use a Compressed Image in an Android App",o={id:"encryption/zip-encryption",title:"How to Encrypt and Use a Compressed Image in an Android App",description:"Overview",source:"@site/docs/encryption/zip-encryption.md",sourceDirName:"encryption",slug:"/encryption/zip-encryption",permalink:"/docs/encryption/zip-encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/arab-apps/docs/encryption/zip-encryption.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"encryption",permalink:"/docs/category/encryption"},next:{title:"animation",permalink:"/docs/category/animation"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Compress and Encrypt the Image",id:"1-compress-and-encrypt-the-image",level:3},{value:"2. Add the Compressed File to the Project",id:"2-add-the-compressed-file-to-the-project",level:3},{value:"3. Decompress the File at Runtime",id:"3-decompress-the-file-at-runtime",level:3},{value:"4. Load and Use the Image Programmatically",id:"4-load-and-use-the-image-programmatically",level:3},{value:"5. Setting Background in XML",id:"5-setting-background-in-xml",level:3},{value:"6. Run the Application",id:"6-run-the-application",level:3},{value:"Summary",id:"summary",level:2},{value:"Library Used",id:"library-used",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-encrypt-and-use-a-compressed-image-in-an-android-app",children:"How to Encrypt and Use a Compressed Image in an Android App"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"This guide explains how to add a compressed and password-protected image inside an Android app and use it as a background in an XML layout."}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.h3,{id:"1-compress-and-encrypt-the-image",children:"1. Compress and Encrypt the Image"}),"\n",(0,r.jsxs)(n.p,{children:["Use a library like ",(0,r.jsx)(n.code,{children:"Zip4j"})," to compress and encrypt your image file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'ZipFile zipFile = new ZipFile("path/to/compressed.zip", "password".toCharArray());\nzipFile.addFile(new File("path/to/your_image.png"));\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2-add-the-compressed-file-to-the-project",children:"2. Add the Compressed File to the Project"}),"\n",(0,r.jsxs)(n.p,{children:["Place the compressed file inside the ",(0,r.jsx)(n.code,{children:"assets"})," directory of your Android project."]}),"\n",(0,r.jsx)(n.h3,{id:"3-decompress-the-file-at-runtime",children:"3. Decompress the File at Runtime"}),"\n",(0,r.jsx)(n.p,{children:"In your Java/Kotlin code, decompress the file at runtime when needed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'ZipFile zipFile = new ZipFile(getFilesDir() + "/compressed.zip", "password".toCharArray());\nzipFile.extractAll(getFilesDir() + "/extracted/");\n'})}),"\n",(0,r.jsx)(n.h3,{id:"4-load-and-use-the-image-programmatically",children:"4. Load and Use the Image Programmatically"}),"\n",(0,r.jsxs)(n.p,{children:["After decompressing the file, load the image using ",(0,r.jsx)(n.code,{children:"Drawable.createFromPath()"})," and set it as a background:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Drawable background = Drawable.createFromPath(getFilesDir() + "/extracted/your_image.png");\nView layout = findViewById(R.id.yourLayout);\nlayout.setBackground(background);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"5-setting-background-in-xml",children:"5. Setting Background in XML"}),"\n",(0,r.jsx)(n.p,{children:"You cannot directly use the image in XML. Instead, set the background programmatically in your activity or fragment:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Background setting is done programmatically in Java/Kotlin\n"})}),"\n",(0,r.jsx)(n.h3,{id:"6-run-the-application",children:"6. Run the Application"}),"\n",(0,r.jsx)(n.p,{children:"Upon running the application, the image will be decompressed and set as the background for the specified layout."}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"This process ensures that the image remains protected inside the APK and is only accessible within the app, where it can be used as intended."}),"\n",(0,r.jsx)(n.h2,{id:"library-used",children:"Library Used"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/srikanth-lingala/zip4j",children:"Zip4j Library"}),": A Java library for handling Zip files."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Thank you from the \u2764\ufe0f from the Arab Apps team"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var r=i(7294);const a={},t=r.createContext(a);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);