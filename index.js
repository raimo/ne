var neo4j = new require('neo4j-embedded');
neo4j.setVMOptions('-Xmx4096m');
neo4j.setDatabaseProperties({'org.neo4j.server.manage.console_engines': 'shell', 'org.neo4j.server.webserver.port': '7575'});

neo4j.connectWrapped('graph.db', function(err, database) {
  console.log('hello');
});

console.log('Press any key to exit');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));