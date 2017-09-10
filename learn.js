var learn = {
    mac:{
        urls:[],
        notes:[
            {
                title:'快捷命令',
                note:[
                    'option+shift+F快捷格式化'
                ],
                `brew.sh
                Homebrew
                brew nginx`
                brew services start nginx
            }
        ]
    },
    mongo:{
        urls:[],
        notes:[
            {
                title:'配置',
                note:`/usr/local/etc mongo配置
                    /usr/local/var
                    kill -s 9 22734`
            },
            {
                title:'快速开始',
                note:`mongodb
                        cd bin
                        ./mongod -dbpath=/usr/local/mongodb/data -logpath=/usr/local/mongodb/logs

                            •	后台服务启动
                            •	  ./mongod -dbpath=/usr/local/mongodb/data -logpath=/usr/local/mongodb/logs --fork
                            ·	后台权限启动
                            ·	./mongod -dbpath=/usr/local/mongodb/data -logpath=/usr/local/mongodb/logs --fork --auth

                        http://www.cnblogs.com/grimm/p/5301135.html

                        本机运行
                        ./bin/mongod -dbpath=/Users/a1/Downloads/mongodb/data -logpath=/Users/a1/Downloads/mongodb/logs --fork

                        db.createCollection("mycol2",{autoIndexId:true})
                        db.mycol.insert({'_id':'aa',name:'lisi'})
                        db.mycol.drop()(""
                        db.mycol.insert/save
                        区别是save是没有就插入，有就覆盖
                        db.mycol.find()[4].createtime.getHours()/`
            }
        ]
    },
    sequelize:{
        urls:[
            {
                title:'官方文档',
                url:'http://docs.sequelizejs.com/manual/tutorial/querying.html'
            },
            {
                title:'包含es7await用法',
                url: 'https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471955049232be7492e76f514d45a2180e2c224eb7a6000',
            },
            {
                title:'Node.js Sequelize如何实现数据库的读写分离',
                url:'http://www.jb51.net/article/95467.htm'
            },
            {
                title:'Sql对照表',
                url:'https://segmentfault.com/a/1190000003987871'
            },
            {
                title:'其他文档',
                url:`https://itbilu.com/nodejs/npm/VkYIaRPz-.html
                     https://itbilu.com/nodejs/npm/V1PExztfb.html
                     https://cnodejs.org/topic/5201c94144e76d216a39c4dc
                     https://segmentfault.com/q/1010000010363365|加密Blob
                     https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471955049232be7492e76f514d45a2180e2c224eb7a6000
                     http://www.cnblogs.com/adjk/p/5604155.html`
            }
    
        ],
        notes:[]
    },
    mysql:{
        urls:[],
        notes:[]
    },
    linux:{
        urls:[],
        notes:[
            {
                title:'命令开到后台',
                note:'nohup node www & >1.out'
            },
            {
                title:'查看端口',
                note:'netstat -lan | grep 3001'
            },
            {
                title:'',
                note:'ps aux|grep dataroot'
            },
            {
                title:'scp上传下载',
                note:`在服务器外运行，不要在登陆服务器里运行
                    1、从服务器上下载文件
                    scp username@servername:/path/filename /var/www/local_dir（本地目录）
                     例如scp root@192.168.0.101:/var/www/test.txt  把192.168.0.101上的/var/www/test.txt 的文件下载到/var/www/local_dir（本地目录）
                    2、上传本地文件到服务器
                    scp /path/filename username@servername:/path   
                    例如scp /var/www/test.php  root@192.168.0.101:/var/www/  把本机/var/www/目录下的test.php文件上传到192.168.0.101这台服务器上的/var/www/目录中
                    3、从服务器下载整个目录
                    scp -r username@servername:/var/www/remote_dir/（远程目录） /var/www/local_dir（本地目录）
                    例如:scp -r root@192.168.0.101:/var/www/test  /var/www/  
                    4、上传目录到服务器
                    scp  -r local_dir username@servername:remote_dir
                    例如：scp -r test  root@192.168.0.101:/var/www/   把当前目录下的test目录上传到服务器的/var/www/ 目录`
            },
            {
                title:'日常维护记录',
                note:`ps -ef |grep node
                    kill -9 28028
                    ./dsadasda \
                    dsadasda反斜杠是换行的意思，相当于一行`
            }
                
        ]
    },
    nginx:{
        urls:[
            url:`nginx.org`
            note:`wiki:所有相关的模块 我们两群630669663`
        ],
        notes:[
            {
                note:`nginx -c config/xx.conf
                    nginx -s stop`
            },
            {
                title:'nginx 服务器重启命令，关闭',
                note:`nginx -s reload  ：修改配置后重新加载生效
                        nginx -s reopen  ：重新打开日志文件
                        nginx -t -c /path/to/nginx.conf 测试nginx配置文件是否正确

                        关闭nginx：
                        nginx -s stop  :快速停止nginx
                                 quit  ：完整有序的停止nginx

                        其他的停止nginx 方式：

                        ps -ef | grep nginx

                        kill -QUIT 主进程号     ：从容停止Nginx
                        kill -TERM 主进程号     ：快速停止Nginx
                        pkill -9 nginx          ：强制停止Nginx

                        启动nginx:
                        nginx -c /path/to/nginx.conf

                        平滑重启nginx：
                        kill -HUP 主进程号`,
            },
            {
                title:'我们两nginx教程',
                note:`下载安装包后有时候缺少http，则需要一个python解释器，需要
                    ./configure检测
                    yum -y install pcre-devel openssl opensll-devell
                    ./consfigure --prefix=/usr/local/nginx
                    prefix指定安装在哪
                    gzip
                    yum install -y zlib-devel gcc gcc-c++
                    make install
                    cd /usr/local/nginx
                    cd sbin
                    ./nginx
                    windows:start nginx可运行后窗口关闭
                    nginx -s quit
                    -s reload
                    work_process 进程的内核数 全局参数
                    nginx -t -c nginx.conf测试`
            }
        ]
    },
    jquery:{
        urls:[],
        notes:[
            {
                title:'筛选',
                note:`// $("#sample_table tbody tr[data-id^='" + menu_code + "']").show()
		                // $("#sample_table tbody tr:not([data-id^='" + menu_code + "'])").hide()
                        if ($('#chkall').is(':checked')) {
                        $('#sample_table tbody tr input').prop("checked", false);
                        `
            }
        ]
    },
    dataTables:{
        urls:[
            {
                title:'options配置',
                url:'https://datatables.net/reference/option/'
            },
            {
                title:'行合计',
                url:'http://datatables.club/example/diy.html'
            }
        ],
        notes:[
            {
                title:'功能',
                note:`搜索"searching": true
                searching : false, //去掉搜索框方法一：百度上的方法，但是我用这没管用
        sDom : '"top"i',   //去掉搜索框方法二：这种方法可以，动态获取数据时会引起错误
        bFilter: false,    //去掉搜索框方法三：这种方法可以
        bLengthChange: false,   //去掉每页显示多少条数据方法`
            }
        ]
    },
    artTemplate:{
        urls:[
            {
                title:'配置',
                url:`https://aui.github.io/art-template/docs/options.html
                    https://aui.github.io/art-template/docs/installation.html`
            }
        ]
    },
    jsUI:{
        urls:[
            title:'layer',
            url:'http://www.layui.com/doc/modules/tree.html'
        ]

    },
    vue:{
        urls:[],
        notes:[
            {
                note:
                    `is的用法
                    props:{
                        A:Number,
                        B:[String,Number,Boolean,Object,Array,Function],
                        C:{
                            type:Boolean,
                            default:true,
                            required:true,
                        },
                        D:{
                            type:Array,
                            default:function(){
                                return []
                            }
                        },
                        E:{
                            validator:function(value){
                                return value > 10;
                            }
                        }

                    }
                    vue内部时用instance of机制来做类型检测
                    父到子通信props 子到父通信$emit
                    `
                    demo:`<div id="app">
                        <div>{{bar}}</div>
                        <my-comp :foo.sync="bar"></my-comp>
                        <!-- <my-comp :foo="bar" @update:foo="val => bar = val"></my-comp> -->
                        </div>
                        <script>
                        Vue.component('my-comp', {
                            template: '<div @click="increment">点我+1</div>',
                            data: function() {
                            return {copyFoo: this.foo}
                            },
                            props: ['foo'],
                            methods: {
                            increment: function() {
                                this.$emit('update:foo', ++this.copyFoo);
                            }
                            }
                        });
                        new Vue({
                            el: '#app',
                            data: {bar: 0}
                        });
                        </script>`
                        `v-on:click.native说明监听的是原生事件`
                        `v-model双向绑定`
                    }
        ]
    },
    wechat:{
        url:{
            title:`朴灵`,
            url:`http://doxmate.cool/node-webot/wechat/api.html`
        },
        url:{
            title:'微信支付商家',
            url:'https://pay.weixin.qq.com/index.php/partner/public/search'
        }
    }
}
