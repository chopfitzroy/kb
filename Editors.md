# Editors

I have spent the bulk of my career trying to find the editor that works for me.

Early in my career I got great use out of the [JetBrains](https://www.jetbrains.com/) tools as well as [Sublime Text](https://www.sublimetext.com/).

Fast forward a few years and I became obsessed with keyboard driven workflows and naturally this lead me to [Vim](https://www.vim.org/) and later [NeoVim](https://neovim.io/).

These tools were fantastic but I definitely experienced config-fatigue both in the significant amount of config required upfront but also the ongoing effort required to make various plugins play nice.

Eventually I grew frustrated with keeping my various plugins up-to-date and moved to [VS Code](https://code.visualstudio.com/) where I ran a very spartan setup using only features that shipped with the base editor.

VS Code served me a long time and for the most part I have no complaints, I did miss having my editor in my terminal and obviously VS Code favours the [Key Chord](https://www.emacswiki.org/emacs/KeyChord) style of keybindings.

[Xah Lee](https://github.com/xahlee) has an excellent write up on [why key chords are ineffecient](http://xahlee.info/kbd/banish_key_chords.html).

### Helix

[Helix](https://helix-editor.com/) is a fairly recent discovery for me and has ultimately lured me back into the modal editing space.

Helix is a [Kakoune](https://kakoune.org/) inspired editor which is similar to Vim but flips the _Verb -> Noun_ style commands to be _Noun -> Verb_ this allows the editor to give the developer significantly more feedback during editing.

Kakoune was coming into popularity during my transition to VS Code and while at the time I was interested I didn't feel confident moving my workflow to such a young editor.

Helix takes Kakoune a step further and aims to provide an out-of-the-box development environment.

Helix is able to do this by handing off code analysis and syntax highlighting to some of the _best in class_ tools available to the industry.

- [Tree-Sitter](https://tree-sitter.github.io/tree-sitter/) for syntax highlighting and text objects
- [Language server protocal](https://microsoft.github.io/language-server-protocol/)  for code analysis and autocompletion

Helix has single handedly allowed me to stop worrying about my editor and get on with what I want to do which is coding.

### Lisps

I have recently become very interested in [Clojure](https://clojure.org/) and Lisps in general.

This interest was largely prompte by [Data Orientated Programming](https://www.manning.com/books/data-oriented-programming) and later [Clojure for the Brave and True](https://www.braveclojure.com/).

Interestingly most lisps encourage something called [REPL driven development](https://mikelevins.github.io/posts/2020-12-18-repl-driven/) which among other things creates an incredibly tight feedback loop between the engineer and their program.

Some even go as far to say that [Clojure is in fact a trinity](https://blog.jakubholy.net/2022/trinity-of-clojure/) and if you don't embrace REPL driven development you are missing the point of what it means to write software with Clojure.

Over the years I have learnt that it is best to use tools the way they are intented to be used in order to gain an accurate understanding of what is really on offer.

With that in mind I have been trying to find an editor that will allow me to embrace this style of development without having to give up too many of the tools I love.

It is worth noting that one day I will be able to do this kind of development in Helix but that won't be until a [plugin system](https://github.com/helix-editor/helix/discussions/3806) is shipped.

### Emacs

[Emacs](https://www.gnu.org/software/emacs/) is largely considered _the_ lisp editor, being written in a lisp dialect itself this makes sense.

This isn't just annecdotal either, we have the [State of Clojure 2022 Results](https://clojure.org/news/2022/06/02/state-of-clojure-2022) which gives us a clear insight into popular tools within the Clojure community.

The de-facto tool for working with Clojure in Emacs appears to be [CIDER](https://cider.mx/).

I tried very hard to get acquainted with Emacs but I just couldn't make it _click_.

I worked through the [system crafters](https://wiki.systemcrafters.cc/) guides, I created my own config, but it all just felt a bit too complicated and like it wasn't giving a good enough return on investment.

Now I could have used something like [DOOM Emacs](https://github.com/doomemacs/doomemacs) to get up and running quickly and with familiar keybindings but I am a firm believer in running a tool with it's defaults at lest initially to make sure I understand what I am [deviating away from](https://protesilaos.com/codelog/2019-12-20-vlog-switch-emacs/) and why.

It is worth noting that if I did want to re-create a similar modal editing experience I would most likely have reached for [Meow](https://github.com/meow-edit/meow) which is much closer to Kakoune/Helix in it's editing paradigm.

### Conjure

[Conjure](https://github.com/Olical/conjure) is another interesting option when it comes to editing Clojure and has become [well respected](https://blog.djy.io/conjuring-clojure-in-vim-2020-edition/) in the NeoVim community.

NeoVim is certainly more appealing that Emacs but it would still mean going back to not only the _Verb -> Noun_ style of command but also buying back into maintaining my own configuration.

Fortunately these days there exist a number of _pre-configured_ NeoVim clients, a few are:

- [NvChad](https://nvchad.com/)
- [LazyVim](https://www.lazyvim.org/)
- [LunarVim](https://www.lunarvim.org/)

Personally these are a little too _heavy handed_ for my liking and if I were to go back to NeoVim I see myself starting with [`magic-kit`](https://github.com/Olical/magic-kit) a NeoVim start from [Oliver Cadwell](https://oli.me.uk/) the author of Conjure.

Additionally `magic-kit` supports [`aniseed`](https://github.com/Olical/aniseed) which allows you to configure your NeoVim config using [Fennel](https://fennel-lang.org/) as opposed to Lua.

### The near future

For now I am putting my Clojure journey on hold while prioritising some other side projects.

I am hoping to use that time to sit on my current options and figure out where I would like to go next.

### References

- [`clojure-mode` meets `tree-sitter`](https://metaredux.com/posts/2023/03/12/clojure-mode-meets-tree-sitter.html)
- [Clojure Workflow Reloaded](https://cognitect.com/blog/2013/06/04/clojure-workflow-reloaded)
- [The values of Emacs, the Neovim revolution, and the VSCode gorilla](https://www.murilopereira.com/the-values-of-emacs-the-neovim-revolution-and-the-vscode-gorilla/)
