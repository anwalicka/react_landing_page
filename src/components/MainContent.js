import React from "react";
export default function MainContent() {
    return (
      <main className="container">
        <h1 className="container--title">Fun facts about React</h1>
        <ul className="container--list">
          <li className="container--list_item">Was first released in 2013</li>
          <li className="container--list_item">Was originally created by Jordan Walke</li>
          <li className="container--list_item">Has well over 100k stars on GitHub</li>
          <li className="container--list_item">Is maintained by Facebook</li>
          <li className="container--list_item">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    );
  }