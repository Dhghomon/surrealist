import {
	analyzer,
	as,
	asc,
	assert,
	at,
	begin,
	bm25,
	_break,
	by,
	cancel,
	capacity,
	columns,
	comment,
	commit,
	content,
	_continue,
	create,
	database,
	_default,
	define,
	desc,
	dimension,
	dist,
	doc_ids_cache,
	doc_ids_order,
	doc_lengths_cache,
	doc_lengths_order,
	explain,
	exists,
	event,
	fetch,
	field,
	fields,
	flexible,
	_for,
	from,
	_function,
	group,
	mtree,
	mtree_cache,
	highlights,
	_if,
	_in,
	index,
	limit,
	namespace,
	noindex,
	not,
	on,
	only,
	order,
	parallel,
	permissions,
	postings_cache,
	postings_order,
	readonly,
	_return,
	search,
	select,
	set,
	split,
	start,
	table,
	terms_cache,
	terms_order,
	then,
	timeout,
	tokenizers,
	transaction,
	type,
	unique,
	value,
	when,
	where,
	_with,

	// Literals
	after,
	before,
	diff,
	_false,
	full,
	none,
	_null,
	_true,

	f32,
	f64,
	i16,
	i32,
	i64,

	euclidean,
	cosine,
	manhattan,
	minkowski,
} from "./parser.terms";

const tokenMap = {
	analyzer,
	as,
	asc,
	assert,
	at,
	begin,
	bm25,
	break: _break,
	by,
	cancel,
	capacity,
	columns,
	comment,
	commit,
	content,
	continue: _continue,
	create,
	database,
	default: _default,
	define,
	desc,
	dimension,
	dist,
	doc_ids_cache,
	doc_ids_order,
	doc_lengths_cache,
	doc_lengths_order,
	exists,
	explain,
	event,
	fetch,
	field,
	fields,
	flexible,
	for: _for,
	from,
	function: _function,
	group,
	highlights,
	if: _if,
	in: _in,
	index,
	limit,
	mtree,
	mtree_cache,
	namespace,
	noindex,
	not,
	on,
	only,
	order,
	parallel,
	permissions,
	postings_cache,
	postings_order,
	readonly,
	return: _return,
	search,
	select,
	set,
	split,
	start,
	table,
	terms_cache,
	terms_order,
	then,
	timeout,
	tokenizers,
	transaction,
	type,
	unique,
	value,
	when,
	where,
	with: _with,

	// Literals
	after,
	before,
	diff,
	false: _false,
	full,
	none,
	null: _null,
	true: _true,

	f32,
	f64,
	i16,
	i32,
	i64,

	euclidean,
	cosine,
	manhattan,
	minkowski,
};

export const tokens = function(t) {
	return tokenMap[t.toLowerCase()] ?? -1;
}
