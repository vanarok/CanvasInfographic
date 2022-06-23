import Koa from 'koa';
import Serve from 'koa-static'
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const urlFileName = fileURLToPath(import.meta.url)
const directoryName = dirname(urlFileName)

const app = new Koa();
const staticDirectoryPath = resolve(directoryName, 'Public')
app.use(Serve(staticDirectoryPath));
app.listen(3000);
