import Link from 'next/link'
import React from 'react'

const TopPage = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/todo">TODOアプリ</Link>
            </li>
            <li>
                <Link href="/poke">ポケモン</Link>
            </li>
        </ul>
    </div>
  )
}

export default TopPage