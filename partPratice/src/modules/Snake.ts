export default class Snake{
  // 获蛇头的元素
  head: HTMLElement;
  // 蛇的身体（包括蛇头）
  bodies: HTMLCollection;

  // 获取蛇的容器
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake  > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇的坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(value: number) {
    //如果新值和旧值相同，则直接返回不再修改
    if(this.X === value) {
      return
    }

    // X的值的合法范围0-290之间
    if(value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了')
    }
    // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右移动
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value)  {
      // console.log('水平方向发生掉头');
      // 如果发生掉头应该向反方向继续移动
      if(value > this.X) {
        // 如果新值value 大于旧值X，则说明蛇在向右走，此时发生掉头，应该机组向左走
        value = this.X -10
      } else {
        value = this.X + 10
      }
      
    }
    // 移动身体
    this.moveBody();

    this.head.style.left = value + 'px';

    // 检查有没有撞到自己
    this.checkHeadBody()
  }

  set Y(value: number) {
    if(this.Y === value) {
      return
    }
    // Y的值的合法范围0-290之间
    if(value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value)  {
      // console.log('水平方向发生掉头');
      // 如果发生掉头应该向反方向继续移动
      if(value > this.Y) {
        // 如果新值value 大于旧值X，则说明蛇在向右走，此时发生掉头，应该机组向左走
        value = this.Y -10
      } else {
        value = this.Y + 10
      }
    }
    // 移动身体
    this.moveBody();

    this.head.style.top = value + 'px';

    // 检查有没有撞到自己
    this.checkHeadBody()
  }

  addBody() {
    // 向element中添加div
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  moveBody() {
    /* 
      将后面的身体设置为前边身体的位置
      举例子： 
        第4节 = 第3节的位置
        第3节 = 第2节的位置
        第2节 = 第1节的位置
    */
    // 遍历所有身体
    console.log(this.bodies.length);
    
    for(let i = this.bodies.length -1; i > 0; i --) {
      
      // 获取前边身体的位置
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      // 将值设置到当前的身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for(let i = 1; i < this.bodies.length; i ++) {
      let bd = this.bodies[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 进入判断说明蛇头和身体发生碰撞
        throw new Error('撞到自己')
      }
    }
  }
}