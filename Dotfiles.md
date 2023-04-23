# Dotfiles 🍩

Over the years I have tried _many_ different tools for managing dotfiles.

Up until recently I had great success with [Ansible](https://www.ansible.com/) as it covered nearly all of my use cases at the time.

Being able to describe the state of the system as YAML files was also a nice touch.

Moving forward I am looking to migrate over to [Nix](https://nixos.org/) (the package manager not the operating system) as it is even more deterministic than Ansible.

If you are interested in understanding what advantages Nix has over Ansible I highly recommend [this discussion](https://discourse.nixos.org/t/nixos-vs-ansible/16757) and [this summary](https://github.com/WeAreWizards/blog/blob/master/content/articles/ansible-and-nix.md).

Before I talk too much about Nix I would like to quickly go over some of the previous tools I have used and discuss some of their shortcomings.

## Stow

[GNU Stow](https://www.gnu.org/software/stow/) is a symlink manager and can be an [effective way](https://venthur.de/2021-12-19-managing-dotfiles-with-stow.html) to manage dotfiles.

The issues with this approach:

- Impossible to have templated files that use dynamic variables
- Difficult to maintain if you want to have variations in your configuration for different machines
- By default your dotfiles repository file structure has to mirror you `~/` file structure (this can be configured manually)

## VCSH

[RichiH/vcsh](https://github.com/RichiH/vcsh/blob/main/doc/README.md) provides a streamlined way to manage dotfiles via [bare repositories](https://www.ackama.com/what-we-think/the-best-way-to-store-your-dotfiles-a-bare-git-repository-explained/).

The issues with this approach:

- Impossible to have templated files that use dynamic variables
- Difficult to maintain if you want to have variations in your configuration for different machines
- By default you have to ingore everything in `~/` and then explitly require files when you want to track them (opposite of how `git` is normally used)

## Dotter

[SuperCuber/dotter](https://github.com/SuperCuber/dotter) takes a new approach to managing dotfiles by [using templates](https://github.com/SuperCuber/dotter/wiki/Setup-and-Configuration) that are written to `~/` manually.

The issues with this approach:

- You can no longer edit your files directly you have to instead edit the templates

## Ansible

[Ansible](https://www.ansible.com/) while subject to the aforementioned issues allows you to _pick and choose_ which compromises you would like to make on a _package-by-package_ basis.

The reason Ansible allows this is because it supports:

- Symlinks
- Templates
- File synchronization (via `rsync`)

If you are interested in examples of the above I highly recommend [`sloria/dotfiles`](https://github.com/sloria/dotfiles) which I borrowed from heavily when utilizing Ansible.

## Nix

My journey with [Nix](https://nixos.org/) is only just begining and I plan to update here regularily, at a first glance the syntax seems rather verbose/complex but if it allows me to achieve more accurate representations of what my system should look like that is an acceptable cost.
