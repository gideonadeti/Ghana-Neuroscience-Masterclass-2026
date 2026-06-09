export interface GitInstallationOS {
  id: string;
  osName: string;
  instructions: string[];
  links?: { label: string; url: string }[];
}

export interface GitInterface {
  name: string;
  url: string;
}

export interface GitWorkflow {
  title: string;
  description?: string;
  code?: string;
}

export interface GitData {
  introduction: string;
  githubDetails: string;
  installations: GitInstallationOS[];
  cheatSheetUrl: string;
  interfaces: GitInterface[];
  workflows: GitWorkflow[];
  footerContact: string;
}

export const gitData: GitData = {
  introduction: "We will be using the version control tool 'git', along with the website GitHub and/or a graphical interface GitHub Desktop.",
  githubDetails: "If you don't have an account yet, please sign up at GitHub. Add your GitHub account username to your profile on the 'People' page. Next, make sure you have access to the 'git' software",
  installations: [
    {
      id: "macos",
      osName: "macOS",
      instructions: [
        "Type 'git --version' at a prompt in Terminal to see if this is already installed. You may get a message asking if you would like to install 'command line tools'. If so, click 'Install'.",
        "If you don't already have it and you don't see the message above, you can install Git by installing Xcode through the App Store.",
        "If neither of the previous options works for you, install 'git' by following the instructions at Installing Git."
      ],
      links: [
        { label: "Installing Git", url: "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" }
      ]
    },
    {
      id: "windows",
      osName: "Windows",
      instructions: [
        "Download and install Git for Windows. (You probably want the 64-bit version.) When prompted to select line endings, choose the option to checkout 'as is' and commit 'unix style line endings'."
      ],
      links: [
        { label: "Git for Windows", url: "https://gitforwindows.org/" }
      ]
    },
    {
      id: "linux",
      osName: "Linux",
      instructions: [
        "If this isn't already installed on your distribution, install 'git' using the instructions at Installing Git."
      ],
      links: [
        { label: "Installing Git", url: "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" }
      ]
    },
    {
      id: "all-platforms",
      osName: "All Platforms",
      instructions: [
        "We will use the GitHub Desktop interface to make Git a bit easier to use; please install it."
      ],
      links: [
        { label: "GitHub Desktop", url: "https://desktop.github.com/" }
      ]
    }
  ],
  cheatSheetUrl: "https://about.gitlab.com/images/press/git-cheat-sheet.pdf",
  interfaces: [
    {
      name: "GitHub Desktop (This is our recommendation for git beginners.)",
      url: "https://desktop.github.com/"
    },
    {
      name: "Git for Windows includes a GUI interface.",
      url: "https://gitforwindows.org/"
    },
    {
      name: "Visual Studio Code includes Git compatibility built-in.",
      url: "https://code.visualstudio.com/"
    },
    {
      name: "PyCharm includes Git compatibility built-in",
      url: "https://www.jetbrains.com/pycharm/"
    }
  ],
  workflows: [
    {
      title: "Fork the Ghana-Neuroscience-Masterclass-2026 repo",
      description: "Navigate to the Ghana-Neuroscience-Masterclass-2026 repo (or just scroll to the top of this page) and click \"Fork\" at the top right (or just scroll to the top of this page)."
    },
    {
      title: "Single-user repository -- clone a repository",
      description: "Clone from GitHub:",
      code: "$ git clone https://github.com/username/Ghana-Neuroscience-Masterclass-2026 # clones into ./Ghana-Neuroscience-Masterclass-2026"
    },
    {
      title: "A useful trick",
      description: "Install your local repo in python so that you can edit in place:",
      code: "$ pip install -e Ghana-Neuroscience-Masterclass-2026/"
    },
    {
      title: "Single-user repository -- commit a specific set of files, push to server/remote",
      code: "$ git pull # make sure we have the latest changes from the server\n$ git add some_file # stage the file we want to commit\n$ git add some_other_file # stage another file\n$ git commit -m \"your commit message\" # commit staged files\n$ git push # off we go"
    },
    {
      title: "Pull requests -- proposing changes to someone else's repository",
      description: "navigate to the repo on Github and \"open a pull request\""
    },
    {
      title: "Syncing upstream changes",
      code: "$ git remote add upstream https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026\n$ git pull upstream main\n$ git push origin main\n$ # open a PR"
    },
    {
      title: "Feature branches -- keeping one set of changes isolated from another",
      code: "$ git checkout main # just to make it clear which branch we start from\n$ git checkout feature_branch\n$ # ...edit...\n$ git add some_file\n$ git commit -m \"your commit message\"\n$ git checkout main # change is committed, but not to main"
    },
    {
      title: "Feature branches -- these can be stored remotely too, of course",
      code: "$ git checkout main\n$ git checkout feature_branch\n$ # ...edit...\n$ git add some_file\n$ git commit -m \"your commit message\"\n$ git push origin feature_branch\n$ git checkout main"
    },
    {
      title: "Feature branches -- merging your changes back in",
      code: "$ git checkout feature_branch # make the new branch\n$ # ...edit...\n$ git commit -m \"your commit message\" # commit changes\n$ git checkout main # when ready, head back to main\n$ git merge feature_branch # merge feature_branch --> main."
    }
  ],
  footerContact: "If you have questions or need help, email Grace Lowor (gracelowor@gmail.com) or another course TA (see the People page for contact information)."
};
