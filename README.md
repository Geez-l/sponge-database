# PGC Bioinformatics Training and Internship Program  
## Philippine Sponge Database

---

## 📌 Introduction

**Purpose:**  
The purpose of this website is to implement a searchable database website of the different sponges gathered in the Philippines. This is an internship project of the Bioinformatics Training and Internship Program in collaboration with the University of the Philippines Marine Science Institute (MSI).

**Target Audience:**  
Researchers, students, and enthusiasts who are interested in acquiring knowledge about the different sponges present in the country.

---

## 🎯 Goals

- Showcase the different sponges in the country  
- Display the different information about sponges  
- Provide relevant details about their diversity  
- Allow users to explore and learn about sponges

---

## ⚙️ General Requirements

The Philippine Sponge Database was developed with the following requirements:

- React as frontend with HTML, CSS, JavaScript, and Bootstrap as framework  
- Implemented using Next.js and hosted using Vercel
- Implemented PostgreSQL in Supabase  

---

## 📄 Pages and Navigation

- **Home Page** - Presents a search bar and drop downs to search for different sponges. It also displays information about how to search the database and general information about Philippine Marine Sponges.
- **Results Page / OTU List Page** - Shows search results and sponge listings based on the operational taxonomic unit, color, functional form, etc.
- **Frequently Asked Questions (FAQ)** - Common questions and answers about sponges.
- **About Us Page** - Information about the project and team. 

---

## 🛠️ Project Setup

### Prerequisites

- Install Git from [https://git-scm.com/downloads](https://git-scm.com/downloads)  
- Install Node.js from [https://nodejs.org/en](https://nodejs.org/en)  
- Install Prettier extension in Visual Studio Code  
- Set up Visual Studio Code  
- Set up React Next.js following [Next.js Documentation](https://nextjs.org/docs/app/getting-started/installation)  
- Optionally, set up GitHub Desktop from [https://desktop.github.com/download/](https://desktop.github.com/download/)  

---

## 🧬 Cloning the Repository

There are two ways to set up the project:

### 1. Command Line

```bash
# Navigate to your desired directory
cd path/to/directory

# Clone the repository
git clone https://github.com/Geez-l/sponge-database.git
```

### 2. GitHub Desktop

1. Navigate to the project on GitHub using a browser
2. Click **Code** and select **Open with GitHub Desktop**
3. Choose the location to save the project and click **Clone**

---

## 📦 Install Dependencies

Run the following command in the project directory to install the required dependencies:

```bash
npm install
```

Run this command after cloning the repository to install all necessary dependencies.

---

## 🚀 Getting Started with the Project

1. Navigate to the project directory

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the site

4. To see backend integration, run:
   ```bash
   node server.js
   ```

5. Edit pages by modifying `app/page.tsx`

6. Deploy to production using Vercel

---

## 🌱 Creating a New Branch

### Command Line

```bash
# Check current branch
git branch

# Create new branch
git branch <branch-name>

# Switch to new branch
git checkout <branch-name>
```

### GitHub Desktop

1. Click **Current Branch** to see the list of branches
2. Click **New Branch** and name it `<branch-name>`
3. Click **Publish Branch** to push it to GitHub

---

## 🏷️ Naming Conventions

Use descriptive names for branches:

- `feature/feature-name`
- `bugfix/issue-no`
- `enhancement/code-area`
- `testing/unit`

**Example:**
```bash
git checkout -b feature/home-page
```

---

## 💾 Committing and Pushing Changes

> **💡 Note:** While editing, run: `npm run compile:sass`

### Command Line

1. Open Git Bash and navigate to the project directory

2. In the repository, execute:
   ```bash
   npm run compile:sass
   ```

3. Start making changes to the project

4. Committing steps:
   ```bash
   # Check modified files
   git status

   # Add all changes to staging
   git add .

   # Commit with a message
   git commit -m "your descriptive commit message"

   # Push to your branch
   git push -u origin <branch-name>
   ```

### GitHub Desktop

1. Save changes using `Ctrl + S`
2. Write a commit message and optional description
3. Click **Commit to `<branch-name>`**
4. Click **Push Origin**
5. If needed, pull changes to sync with remote
6. Click **Preview Pull Request**

---

## 🔀 Creating a Pull Request

### Command Line

1. Open your browser and go to the GitHub repository
2. Click **Compare & Pull Request**
3. Add a message and description
4. Click **Create Pull Request**
5. Check for merge conflicts and resolve if necessary

### GitHub Desktop

1. After clicking **Preview Pull Request**, GitHub opens in your browser
2. Click **Create Pull Request**
3. Review and resolve any conflicts
4. Click **Merge Pull Request**
5. Optionally, click **Close** to finish the pull request

---

## 👥 People Involved

This section displays the people involved in the project including the interns, mentors and collaborators.

👨🏻‍💻 Developers
- The interns:
- **Frontend Developer** - Revien Rodriguez
- **Backend Developer** - Gliezel Ann Pajarilla
- **Documentation & Quality Assurance** - Elishia Janelle Ocson

👨‍🏫 Mentors
- Philippine Genomics Information and Resource Hub (PHILOMICS)
- **Bioinformatics Data Analyst** - Dan Jethro Masacupan
- **HPC Administrator** - Joshua Gregor Dizon


👩🏻‍🔬 Collaborators
- UP Marine Science Institute (MSI)
- **Cecilia Conaco, PhD**
- **Vanessa Joy Diamante** 
---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Desktop Documentation](https://docs.github.com/en/desktop)