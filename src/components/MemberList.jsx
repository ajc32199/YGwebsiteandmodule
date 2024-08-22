import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Record = (props) => {
    <tr className = "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted/100">
        <td className = "p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            {props.member.name}
        </td>
        <td className = "p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            {props.member.position}
        </td>
        <td className = "p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            {props.member.grade}
        </td>
        <td className = "p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            {props.member.debt}
        </td>
        <td className = "p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            {props.member.active_status}
        </td>
        <td className = "p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            {props.member.scroll_number}
        </td>
        <td className = "p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
            {props.member.comments}
        </td>
        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <div className="flex gap-2">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to={`/edit/${props.member._id}`}
        >
          Edit
        </Link>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
          color="red"
          type="button"
          onClick={() => {
            props.deleteRecord(props.member._id);
          }}
        >
          Delete
        </button>
      </div>
    </td>
    </tr>
}        
