/* eslint-disable no-unused-expressions */
import React from "react";


class App extends React.Component {
  render () {
  return ( 
		<div>
			<form>
				<input type="text" />
				<button>追加</button>

				<label>
					<input type="checkbox" />
					全て完了にする
				</label>

				<select>
					<option>全て</option>
					<option>未完了</option>
					<option>完了済</option>
				</select>

				<ul>
					<li>
						<label>
							<input type="checkbox" />
							洗濯する
							<button>編集する</button>
							<button>削除</button>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" />
							宿題する
							<button>編集する</button>
							<button>削除</button>
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" />
							腹筋する
							<button>編集する</button>
							<button>削除</button>
						</label>
					</li>
				</ul>
			</form>
		</div>
	)}
};

export default App;