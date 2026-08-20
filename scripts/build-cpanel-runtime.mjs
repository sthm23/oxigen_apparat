import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const nextStandaloneDir = path.join(projectRoot, '.next', 'standalone');
const nextStaticDir = path.join(projectRoot, '.next', 'static');
const publicDir = path.join(projectRoot, 'public');
const outputDir = path.join(projectRoot, 'cpanel-build', 'standalone');

function ensureExists(targetPath, description) {
    if (!existsSync(targetPath)) {
        throw new Error(`${description} not found: ${targetPath}`);
    }
}

execSync('npm run build', {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: true,
});

ensureExists(nextStandaloneDir, 'Next standalone output');
ensureExists(nextStaticDir, 'Next static output');
ensureExists(publicDir, 'Public assets directory');

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(path.join(outputDir, '.next'), { recursive: true });
mkdirSync(path.join(outputDir, 'public'), { recursive: true });

cpSync(nextStandaloneDir, outputDir, { recursive: true });
cpSync(nextStaticDir, path.join(outputDir, '.next', 'static'), { recursive: true });
cpSync(publicDir, path.join(outputDir, 'public'), { recursive: true });

console.log(`cPanel runtime prepared in ${outputDir}`);