import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他所有类
export default class GameContral{
  // 定义三个属性
  // 蛇
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  // 创建一个属性来存储蛇的移动方向（也就是空串）
  dirction: string = '';
  //创建一个属性用来记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 2);

    this.init();
  }

  // 游戏初始化方法，调用后游戏开始
  init() {
    //绑定键盘按键按下事件
    document.addEventListener('keydown', this.keyDownHandler.bind(this))
    //调用run方法使蛇移动
    this.run()
  }

  /* 
    ArrowUp
    ArrowDown
    ArrowLeft
    ArrowRight
  */
  // 创建键盘按下的反应函数
  keyDownHandler(event: KeyboardEvent) {
    // 检查event.kek的值是否合法 用户是否按了正确的按键
    // 修改direction属性
    this.dirction = event.key;   
  }

  // 创建一个设移动的方法
  run() {
   /* 
    根据方向（this.direction）来使蛇的位置改变
    向上 top
    向下 down
    向左 left
    向右 right
   */

    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据修改X,Y值
    switch(this.dirction) {
      case "ArrowUp":
      case "Up":
        // 向上移动 top减少
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        // 向下移动 top增加
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        // 向左移动 left减少
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        // 向右移动 left增加
        X += 10;
        break;
    }
    // 检查蛇是否吃到食物
    this.checkEat(X, Y);
    try {
      this.snake.X = X
      this.snake.Y = Y
    }catch(e) {
      // 进入到catch， 说明出现异常，游戏结束，弹出一个提示信息
      alert('GAME OVER');
      this.isLive = false;
    }
    //开始一个定时调用
    this.isLive && setTimeout(this.run.bind(this), (300 - (this.scorePanel.level - 1) * 30))
  }

  // 定义一个方法，用来检测蛇是否迟到食物
  checkEat(X: number, Y: number) {
    if(X === this.food.X && Y === this.food.Y) {
      // 食物的位置进行改变
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 蛇要加一节
      this.snake.addBody();
    }
  }
}