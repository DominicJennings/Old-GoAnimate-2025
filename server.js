const env = Object.assign(process.env, require("./env"), require("./config"));

const http = require("http");
const chr = require("./character/redirect");
const pmc = require("./character/premade");
const chl = require("./character/load");
const Chl = require("./character/list");
const chs = require("./character/save");
const cht = require("./character/thmb");
const chu = require("./character/upload");
const mvu = require("./movie/upload");
const asu = require("./asset/upload");
const stl = require("./static/load");
const stp = require("./static/page");
const stc = require("./static/pagecc");
const scc = require("./static/pageccbro");
const slv = require("./static/pagelvp")
const asl = require("./asset/load");
const asL = require("./asset/list");
const ast = require("./asset/thmb");
const mvl = require("./movie/load");
const mvL = require("./movie/list");
const MvL = require("./starter/list");
const stu = require("./starter/upload");
const mvm = require("./movie/meta");
const mvs = require("./movie/save");
const mvt = require("./movie/thmb");
const Mvt = require("./starter/thmb");
const thL = require("./theme/list");
const thl = require("./theme/load");
const tsv = require("./tts/voices");
const tsl = require("./tts/load");
const url = require("url");

const functions = [mvL, pmc, asl, chl, thl, thL, chs, cht, asL, tsl, chr, ast, mvm, mvl, mvs, mvt, tsv, asu, mvu, stp, stl];

module.exports = http
	.createServer((req, res) => {
		try {
			const parsedUrl = url.parse(req.url, true);
			//if (!parsedUrl.path.endsWith('/')) parsedUrl.path += '/';
			const found = functions.find((f) => f(req, res, parsedUrl));
			console.log(req.method, parsedUrl.path);
			if (!found) {
				res.statusCode = 404;
				res.end();
			}
		} catch (x) {
			res.statusCode = 404;
			res.end();
		}
	})
	.listen(env.PORT || env.SERVER_PORT, console.log);
