import { Response } from 'express';

import { BaseTxtExporter } from '../common';

import { Eyepiece } from './eyepiece.interface';

export class EyepieceCsvExporter extends BaseTxtExporter<Eyepiece> {

    public export(res: Response, items: Eyepiece[]) {
        res.set('Content-Type', 'text/plain');
        let content = 'Model;Vendor;Focal Length (mm);Apparent FOV (deg)\r\n';
        items.forEach(({ model, vendor, focalLength, apparentFOV }) => {
            content += `${model};${vendor};${focalLength};${apparentFOV}\r\n`;
        });
        res.send(Buffer.from(content));
    }

}
