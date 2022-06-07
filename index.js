(function (){

    async function init(){

        const Message = 'Hello World!!!';
        const HelloElement = document.createElement('div');
        HelloElement.innerHTML = /*html*/`<h1>${Message}</h1>`;
        document.body.append(HelloElement);
    }

    window.onload = init;

})();