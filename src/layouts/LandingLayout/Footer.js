import React from 'react';

export default function Footer() {
  return (
    <div className="mt-12 py-6 border-t border-gray-600">
      <p className="text-center">
        © {new Date().getFullYear()} React + TailwindCSS
      </p>
    </div>
  );
}