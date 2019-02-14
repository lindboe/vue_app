cmd="xdg-open"
if [ -n "$BROWSER" ];
  then cmd="$BROWSER";
fi

python3 -m http.server &
server=$!
trap "kill $server; exit" INT

"$cmd" http://localhost:8000/index.html
wait
