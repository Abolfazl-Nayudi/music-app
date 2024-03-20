import { Plus } from 'lucide-react';
import React from 'react';
import './ViewAll.css';
export default function ViewAll() {
  return (
    <div className="view-all">
      <span className="view-all-icon">
        <Plus />
      </span>
      <span>View All</span>
    </div>
  );
}
