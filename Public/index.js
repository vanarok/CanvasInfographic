window.addEventListener('load', () => {
    const init = document.querySelector("#init");
    const img = document.querySelector("#img");
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');
    init.innerHTML = "Banan ready!🍌"

    const invert = () => {
        context.drawImage(img, 0, 0);
        const imageData = context.getImageData(0, -40, canvas.width, canvas.height);
        const { data } = imageData;
        for (let index = 0; index < data.length; index += 4) {
            data[index] = 255
            data[index + 1] = 255
            data[index + 2] = 255
            if (index % 22 === 20) {
                data[index] = 255
                data[index + 1] = 100
                data[index + 2] = 100
            }
            if (index % 19 === 20) {
                data[index] = 255
                data[index + 1] = 100
                data[index + 2] = 100
            }
            if (index % 22 === 10) {
                data[index] = 255
                data[index + 1] = 100
                data[index + 2] = 100
            }
            if (index % 22 === 0) {
                data[index] = 255
                data[index + 1] = 100
                data[index + 2] = 100
            }

        }
        context.putImageData(imageData, 0, 0);
    };
    invert()
});
