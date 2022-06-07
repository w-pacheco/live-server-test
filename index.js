(function (){

    async function init(){

        const HelloElement = document.createElement('div');
        HelloElement.innerHTML = /*html*/`
        <h1>Hello World!</h1>`;

        document.body.append(HelloElement);

    }

    window.onload = init;

})();