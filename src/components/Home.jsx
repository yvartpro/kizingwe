import Up from '@mui/icons-material/ArrowUpward'
import Down from '@mui/icons-material/ArrowDownward'

const Home  = () => {
	const cols = [
		{id:1, field: 'Students', stat: 12457, last: 12204},
		{id:3, field: 'Teachers', stat: 123, last: 147},
		{id:4, field: 'Staffs', stat: 177, last: 194 },
		{id:5, field: 'Awards', stat: 45, last: 23},
	]
	return (
		<>
		<div class="mt-6">
		   <input type="search" name="query" class="border border-gray-500 rounded-full py-1 px-3 text-12 focus:outline-0 focus:border-green-600" placeholder="Rechercher ici..." />
		</div>
		<div class="grid grid-cols-2 sm:gid-cols-2">
			<div class="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-6">
				{ cols.map(col => 
					<div key={col.id} class="border-2 bg-slate-200 py-3 px-3 rounded-2xl text-orange-700 text-base">
						<p class="flex justify-between">
						 <span class="text-xs font-bold font-bold w-18 text-center text-green-500 bg-white rounded-full px-2 py-1">{ col.stat > col.last ? <Up sx={{ fontSize: '13px'}}/> : <Down sx={{ fontSize: '13px'}}/>} {(col.stat - col.last)} %</span>
						 <span class="text-white">...</span>
						</p>
						<p class="text-gray-950 mt-8 mb-2 text-xl text-2xl font-bold">{col.stat}</p>
						<p>{col.field}</p>				 
			  </div>)}
			</div>
			<div>Yves</div>
		</div>
		</>
	)
}

export default Home
