import React from 'react'
import MyInput from '../../UI/input/MyInput'
import MySelect from '../../UI/select/MySelect'

export default function PostFilter({ filter, setFilter }) {
    return (
        <div>
            <MyInput value={filter.query} placeholder="Search post" onChange={e => setFilter({ ...filter, query: e.target.value })} />

            <MySelect value={filter.sort} defaultValue="Sorting by" onChange={selectodSort => setFilter({ ...filter, sort: selectodSort })}
                options={[
                    { value: "title", name: "Sorting by name" },
                    { value: "description", name: "Sorting by description" }
                ]} />
        </div>
    )
}
