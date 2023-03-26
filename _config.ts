import lume from "lume/mod.ts";
import modifyUrls from "lume/plugins/modify_urls.ts"

import emoji from "npm:markdown-it-emoji";
import anchor from "npm:markdown-it-anchor";

// Set the markdown plugins
const markdown = {
  plugins: [emoji, anchor],
  keepDefaultPlugins: true,
};

const site = lume({}, { markdown });

site.use(modifyUrls({
  fn: (url) => {
    // @NOTE
    // - Standardise URLs, could do this inline
    // - However this allows links to still work in the GitHub UI
    // - https://stackoverflow.com/questions/1818310/regular-expression-to-remove-a-files-extension
    const index = url.lastIndexOf('.');
    const clean = url.substr(0, index) || url;
    const lower = clean.toLowerCase();
    return lower;
  } 
}));


export default site;
