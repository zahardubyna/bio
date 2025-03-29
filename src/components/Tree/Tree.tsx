import React, {useEffect} from "react";


function Tree(cnv_ref: React.MutableRefObject<null>){

    return useEffect(() => {
        let cnv: HTMLCanvasElement = cnv_ref.current!;
        let ctx = cnv.getContext('2d')!;

        let w = (cnv.width = window.innerWidth);
        let h = (cnv.height = window.innerHeight);

        ctx.lineWidth = 0.6;

        let dir_min = -Math.PI / 4 / 4;
        const dir_min_initial = -Math.PI / 4 / 4;
        const dir_min_final = -Math.PI / 4 / 1.8;

        handleScroll();
        window.addEventListener("scroll", function () {
            handleScroll();
        });

        function handleScroll() {
            const scr_top = window.scrollY;
            const scr_height = document.documentElement.scrollHeight - window.innerHeight;
            const scr_fraction = scr_top / scr_height;
            dir_min = calculateDirMin(scr_fraction);
            update();
        }

        function calculateDirMin(scroll_fraction: number) {
            return dir_min_initial + (dir_min_final - dir_min_initial) * scroll_fraction;
        }

        function update() {
            ctx.clearRect(0, 0, w, h);
            // console.log(iterations);
            tree(w / 2, h / 2 + 850, -Math.PI / 2, 500, 12, dir_min);
        }

        function tree(x: number, y: number, dir: number, l: number, iteration: number, dir_m: number) {
            let x1 = x + Math.cos(dir) * l;
            let y1 = y + Math.sin(dir) * l;
            ctx.beginPath();
            ctx.moveTo(x + 0.5, y + 0.5);
            ctx.lineTo(x1 + 0.5, y1 + 0.5);
            ctx.stroke();
            if (iteration >= 0) {
                tree(x1, y1, dir + dir_m, l / 1.5, iteration - 1, dir_m);
                tree(x1, y1, dir - dir_m, l / 1.5, iteration - 1, dir_m);
            }
        }
    }, [cnv_ref]);
}

export default Tree;