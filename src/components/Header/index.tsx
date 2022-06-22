import React from 'react';
import Link from 'next/link';
import { PawPrint, DotsThree } from 'phosphor-react';

function Header() {
  return (
    //
    <header className="navbar bg-gray-900 h-20 absolute top-0 " style={{ backdropFilter: 'saturate(180%) blur(15px)' }}>
      <div className=" btn btn-ghost hover:bg-transparent normal-case text-xl">
        <Link href="/" className="">
          <PawPrint className="text-slate-300 hover:text-rose-700" size={32} />
        </Link>
      </div>
      <div className="flex-1">Wolf.dev</div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle m-0 p-0">
            <div className="w-8 rounded-full">
              <DotsThree size={32} />
            </div>
          </label>
          <ul tabIndex="0" className="mt-3 p-2 z-50 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between z-50">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
