# 🔐 SyncShield — Browser Extension for CVE-2018-5764 Detection

> **Detect unsafe Rsync commands before they become exploits**

A lightweight, privacy-focused browser extension developed as part of **Final Year Project (FYP01) NWS/129/23B** to detect missing `--protect-args` flag in Rsync commands — preventing remote command execution via **CVE-2018-5764**.

✅ Works entirely offline  
✅ No server connections or data collection  
✅ Real-time scanning & alerts  
✅ Educational & mitigation-focused  
✅ Built for students, sysadmins, and security enthusiasts

---

## 👥 Team Members

| No. | Name                                | Student ID    | Role & Responsibilities                          |
|-----|-------------------------------------|---------------|--------------------------------------------------|
| 1   | Muhammad Nur Faiz Bin Ahmad Fauzi   | NWS23070251   | Group Leader & Frontend Developer                |
| 2   | Wan Muhammad Afifuddin Bin Wan Ahmad| NWS23070157   | Command Scanner Developer                        |
| 3   | Waleed Adam Bin Riza Farouk         | NWS23070265   | Testing Lead & Documentation Writer              |
| 4   | Roshazne Elia Binti Mohd Roshidi    | NWS23070105   | Researcher & Presentation Leader                 |

**Supervisor**: Sir Amir Hakeem  
**Intake**: July 2023 | **Trade**: CID (Computer Information & Data)  
**Project Code**: NWS/129/23B  
**Submission**: January 2025

---

## 🎯 Project Overview

Rsync is a powerful utility for file synchronization — but if misconfigured (especially without `--protect-args`), it can lead to **remote command execution** via specially crafted filenames or arguments (CVE-2018-5764).

SyncShield helps users:
- ✅ Paste or upload Rsync commands/scripts
- ✅ Instantly detect unsafe patterns (missing `--protect-args`, unquoted inputs, etc.)
- ✅ Get clear, non-technical alerts and mitigation steps
- ✅ Learn secure Rsync practices — no CLI expertise required

> ⚠️ **Scope**: Focused only on CVE-2018-5764 — simple, targeted, and achievable within academic timeline.

---

## 🧩 Project Structure

```
syncshield-github/
├── website/     # Public-facing site: project info, download, demo
├── extension/   # Browser extension source code (Chrome/Firefox)
└── README.md    # You are here!
```

---

## 🌐 Live Demo (GitHub Pages)

View the official project website at:  
👉 **[https://waleedadam360-web.github.io/SyncShield/](https://waleedadam360-web.github.io/SyncShield/)**

> 💡 *Note: You must enable GitHub Pages in repo Settings → Pages → Branch: `main` → Folder: `/website`*

---

## 🛠️ Key Features

### 1. Rsync Argument Analyzer
Scans user-inputted Rsync commands to detect absence of `--protect-args` — the critical flag that prevents shell injection.

### 2. Detection of Unsafe Input Patterns
Flags unquoted variables, shell metacharacters, and unsanitized user inputs that could trigger CVE-2018-5764.

### 3. Real-Time Alerts & Risk Warnings
Provides immediate visual feedback with:
- Risk level (Low/Medium/High)
- Plain-language explanation
- Impact summary

### 4. Mitigation Guidance
Offers actionable fixes:

```bash
# ❌ Unsafe
rsync -av /src user@host:/dest

# ✅ Safe
rsync -av --protect-args /src user@host:/dest
```

---

## 📖 Usage

Once installed, you can start using SyncShield:

1. Open the Extension  
2. Click the Extensions icon in your browser  
3. Select **SyncShield**  
4. Paste your Rsync command:  

   ```bash
   rsync -av /src user@host:/dest
   ```

5. Run a Scan  
   - **Local Scan** → checks immediately in your browser  
   - **(Optional) Remote Scan** → test against a server (requires URL + token)

---

## 📦 Installation Guide

Follow these steps to install **SyncShield** in your browser:

1. **Download the Extension**  
   👉 [Get SyncShield from our website](https://waleedadam360-web.github.io/SyncShield/)

2. **Extract the Files**  
   - Unzip the downloaded `.zip` file to a folder on your computer.

3. **Open Browser Extensions Page**  
   - **Chrome / Edge / Brave** → Go to `chrome://extensions/`  
   - **Firefox** → Go to `about:debugging#/runtime/this-firefox`

4. **Enable Developer Mode**  
   - *Chrome/Edge/Brave*: Toggle the switch at the top-right.  
   - *Firefox*: No toggle required.

5. **Load the Extension**  
   - *Chrome/Edge/Brave*: Click **Load unpacked** → Select the unzipped SyncShield folder.  
   - *Firefox*: Click **Load Temporary Add-on** → Select the `manifest.json` file inside the SyncShield folder.

6. **Installation Complete 🎉**  
   - SyncShield will now appear in your extensions list and browser toolbar.

---

## 📦 Why Rsync Matters & Why SyncShield is Important

### What is Rsync?
Rsync is a powerful tool used to copy and synchronize files between computers. It’s popular because it’s fast, efficient, and saves bandwidth by only transferring changes instead of the whole file.

### The Problem
If Rsync is not used carefully, it can cause serious problems:
- A wrong command could delete important files.
- Attackers could abuse misconfigured Rsync servers to steal data.
- Past security issues (like CVE-2018-5764) showed that Rsync can be exploited if not properly secured.

### Why SyncShield?
SyncShield helps by:
- ✅ Checking Rsync commands before running them  
- ✅ Warning users about dangerous options (like `--delete` or overwriting files)  
- ✅ Giving safety tips to prevent data loss or attacks
```
